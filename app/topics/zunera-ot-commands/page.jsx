import ZuneraOtCommandsKeywordPage, { generateMetadata } from './zunera-ot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtCommandsKeywordPage />;
}
