import YurotsSwedenServerKeywordPage, { generateMetadata } from './yurots-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSwedenServerKeywordPage />;
}
