import ZenoTideBothClientsPage, { generateMetadata } from './zeno-tide-both-clients';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZenoTideBothClientsPage />;
}
