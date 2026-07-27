import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-ot');
}

export default function WithScreenshotsMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-ot" />;
}
