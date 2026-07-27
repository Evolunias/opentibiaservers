import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-forum');
}

export default function WithScreenshotsShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-forum" />;
}
