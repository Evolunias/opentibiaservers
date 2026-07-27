import ZuneraOtCreateAccountKeywordPage, { generateMetadata } from './zunera-ot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtCreateAccountKeywordPage />;
}
