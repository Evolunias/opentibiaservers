import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-forum');
}

export default function WithScreenshotsOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-forum" />;
}
