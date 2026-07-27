import XanteriaResetKeywordPage, { generateMetadata } from './xanteria-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaResetKeywordPage />;
}
