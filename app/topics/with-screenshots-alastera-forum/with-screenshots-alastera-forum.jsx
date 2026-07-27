import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-forum');
}

export default function WithScreenshotsAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-forum" />;
}
