import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-forum');
}

export default function WithScreenshotsDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-forum" />;
}
