import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-forum');
}

export default function WithScreenshotsSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-forum" />;
}
