import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-ot');
}

export default function WithScreenshotsKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-ot" />;
}
