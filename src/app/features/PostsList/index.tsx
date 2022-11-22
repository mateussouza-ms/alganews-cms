import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import { format } from "date-fns";
import { Post } from "ms-alganews-sdk";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Column, usePagination, useTable } from "react-table";

import { withBoundary } from "../../../core/hoc/withBoundary";
import { usePosts } from "../../../core/hooks/usePosts";
import modal from "../../../core/utils/modal";
import { Loading } from "../../components/Loading";
import { PostTitleLink } from "../../components/PostTitleLink";
import { Table } from "../../components/Table";
import PostPreview from "../PostPreview";

export function PostsListComponent() {
  const [page, setPage] = useState(0);
  const { loading, fetchPosts, paginatedPosts } = usePosts();

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: "",
        accessor: "id",
        Cell: () => <Icon path={mdiOpenInNew} size="14px" color="#0099ff" />,
      },
      {
        Header: () => <div style={{ textAlign: "left" }}>Título</div>,
        accessor: "title",
        Cell: (props) => (
          <div
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: 8,
              maxWidth: 280,
            }}
          >
            <img
              width={24}
              height={24}
              src={props.row.original.editor.avatarUrls.small}
              alt={props.row.original.editor.name}
              title={props.row.original.editor.name}
            />
            <PostTitleLink
              title={props.value}
              href={`/posts/${props.row.original.id}`}
              onClick={(e) => {
                e.preventDefault();
                modal({
                  children: <PostPreview postId={props.row.original.id} />,
                });
              }}
            >
              {props.value}
            </PostTitleLink>
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "right" }}>Criação</div>,
        accessor: "createdAt",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
            }}
          >
            {format(new Date(props.value), "dd/MM/yyyy")}
          </div>
        ),
      },
      {
        Header: () => (
          <div style={{ textAlign: "right" }}>Última atualização</div>
        ),
        accessor: "updatedAt",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
            }}
          >
            {format(new Date(props.value), "dd/MM/yyyy")}
          </div>
        ),
      },

      {
        id: Math.random().toString(),
        Header: () => <div style={{ textAlign: "right" }}>Status</div>,
        accessor: "published",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
            }}
          >
            {props.value ? "Publicado" : "Privado"}
          </div>
        ),
      },
    ],
    []
  );

  const instance = useTable<Post.Summary>(
    {
      data: paginatedPosts?.content || [],
      columns,
      manualPagination: true,
      initialState: { pageIndex: 0 },
      pageCount: paginatedPosts?.totalPages,
    },
    usePagination
  );

  useEffect(() => {
    fetchPosts({
      page,
      size: 5,
      showAll: true,
      sort: ["createdAt", "desc"],
    });
  }, [page, fetchPosts]);

  if (!paginatedPosts) {
    return (
      <div>
        <Skeleton height={32} />
        {Array.from(new Array(7)).map((_, i) => (
          <Skeleton key={i} height={40} />
        ))}
      </div>
    );
  }

  return (
    <>
      <Loading show={loading} />
      <Table<Post.Summary> instance={instance} onPaginate={setPage} />
    </>
  );
}

export const PostsList = withBoundary(PostsListComponent, "lista de posts");
