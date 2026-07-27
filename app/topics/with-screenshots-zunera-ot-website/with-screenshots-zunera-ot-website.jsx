import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-zunera-ot-website');
}

export default function WithScreenshotsZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-zunera-ot-website" />;
}
