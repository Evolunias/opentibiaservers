import ZnoteAacPage, { generateMetadata } from './znote-aac';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacPage />;
}
