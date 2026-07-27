import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-forum');
}

export default function WithScreenshotsTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-forum" />;
}
