import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-infernal-ot-forum');
}

export default function WithScreenshotsInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-infernal-ot-forum" />;
}
