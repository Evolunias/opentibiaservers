import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-forum');
}

export default function WithScreenshotsTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-forum" />;
}
