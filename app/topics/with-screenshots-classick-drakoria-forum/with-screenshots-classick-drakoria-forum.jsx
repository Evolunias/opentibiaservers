import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria-forum');
}

export default function WithScreenshotsClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria-forum" />;
}
