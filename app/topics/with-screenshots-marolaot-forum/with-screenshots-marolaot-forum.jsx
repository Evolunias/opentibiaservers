import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-forum');
}

export default function WithScreenshotsMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-forum" />;
}
