import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { Column, useTable } from "react-table";
import { Post } from "../../../sdk/@types";
import { PostService } from "../../../sdk/services/PostService";
import { Table } from "../../components/Table";

export function PostsList() {
  const [posts, setPosts] = useState<Post.Paginated>();

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
            }}
          >
            <img
              width={24}
              height={24}
              src={props.row.original.editor.avatarUrls.small}
              alt={props.row.original.editor.name}
              title={props.row.original.editor.name}
            />
            {props.value}
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

  const instance = useTable<Post.Summary>({
    data: posts?.content || [],
    columns,
  });

  useEffect(() => {
    PostService.getAllPosts({
      page: 0,
      size: 7,
      showAll: true,
      sort: ["createdAt", "desc"],
    }).then(setPosts);
  }, []);

  return <Table<Post.Summary> instance={instance} />;
}
