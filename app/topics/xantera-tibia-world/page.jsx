import XanteraTibiaWorldKeywordPage, { generateMetadata } from './xantera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraTibiaWorldKeywordPage />;
}
