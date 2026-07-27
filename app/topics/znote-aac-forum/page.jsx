import ZnoteAacForumKeywordPage, { generateMetadata } from './znote-aac-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacForumKeywordPage />;
}
