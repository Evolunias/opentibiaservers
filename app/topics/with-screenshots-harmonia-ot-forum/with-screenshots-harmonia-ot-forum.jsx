import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-forum');
}

export default function WithScreenshotsHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-forum" />;
}
