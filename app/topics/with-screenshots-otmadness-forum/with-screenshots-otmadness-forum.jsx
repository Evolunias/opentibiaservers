import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-forum');
}

export default function WithScreenshotsOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-forum" />;
}
