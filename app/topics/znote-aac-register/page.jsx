import ZnoteAacRegisterKeywordPage, { generateMetadata } from './znote-aac-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacRegisterKeywordPage />;
}
