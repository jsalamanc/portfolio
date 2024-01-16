import { QueryFunction, QueryKey } from 'react-query';

export type GenericProps<TMetadata = undefined> = {
  data: {
    metadata: TMetadata;
  };
};

export declare namespace GlobalTypes {
  interface ListEntriesProps<TMetadata> {
    objects?: TMetadata;
    total?: number;
  }
  interface ImageTypes {
    url?: string;
    imgix_url?: string;
  }
  interface EntryTypes<Metadata> {
    id?: string;
    slug?: string;
    title?: string;
    content?: string;
    bucket?: string;
    created_at?: string;
    modified_at?: string;
    status?: string;
    modified_by?: string;
    created_by?: string;
    publish_at?: string;
    published_at?: string;
    thumbnail?: string;
    type?: string;
    metadata?: Metadata;
  }
}

export declare namespace GlobalReactQueryTypes {
  // Definimos un tipo para la respuesta de la consulta
  type QueryResponse<Props = any> = Props;

  // Definimos el tipo para la función de consulta
  type QueryFunctionType = QueryFunction<QueryResponse>;

  // Definimos el tipo para las props del hook
  interface UseGetDataProps {
    queryKey: [string] | readonly unknown[];
    queryFn: QueryFunctionType;
  }

  // Definimos el tipo de retorno del hook
  interface UseGetDataReturnType {
    data: QueryResponse['data'];
    isError: boolean;
    isLoading: boolean;
    status: string;
  }
}
