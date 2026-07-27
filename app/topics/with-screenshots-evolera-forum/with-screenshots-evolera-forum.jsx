import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-forum');
}

export default function WithScreenshotsEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-forum" />;
}
