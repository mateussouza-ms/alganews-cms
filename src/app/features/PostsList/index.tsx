import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Column, usePagination, useTable } from "react-table";

import { withBoundary } from "../../../core/hoc/withBoundary";
import modal from "../../../core/utils/modal";
import { Post } from "../../../sdk/@types";
import { PostService } from "../../../sdk/services/PostService";
import { Loading } from "../../components/Loading";
import PostPreview from "../../components/PostPreview";
import { PostTitleLink } from "../../components/PostTitleLink";
import { Table } from "../../components/Table";

export function PostsListComponent() {
  const [posts, setPosts] = useState<Post.Paginated>();
  const [error, setError] = useState<Error>();
  const [page, setPage] = useState(0);
  const [isLoadingData, setIsLoadingData] = useState(false);

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
      data: posts?.content || [],
      columns,
      manualPagination: true,
      initialState: { pageIndex: 0 },
      pageCount: posts?.totalPages,
    },
    usePagination
  );

  useEffect(() => {
    setIsLoadingData(true);
    PostService.getAllPosts({
      page: page,
      size: 7,
      showAll: true,
      sort: ["createdAt", "desc"],
    })
      .then(setPosts)
      .catch((err) => setError(new Error(err.message)))
      .finally(() => setIsLoadingData(false));
  }, [page]);

  if (error) {
    throw error;
  }

  if (!posts) {
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
      <Loading show={isLoadingData} />
      <Table<Post.Summary> instance={instance} onPaginate={setPage} />
    </>
  );
}

export const PostsList = withBoundary(PostsListComponent, "lista de posts");
