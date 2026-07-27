import YurotsSwedenServersKeywordPage, { generateMetadata } from './yurots-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSwedenServersKeywordPage />;
}
