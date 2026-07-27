import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-ot');
}

export default function WithScreenshotsRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-ot" />;
}
