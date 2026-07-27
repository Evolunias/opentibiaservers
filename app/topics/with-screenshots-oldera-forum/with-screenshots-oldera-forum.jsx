import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-forum');
}

export default function WithScreenshotsOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-forum" />;
}
