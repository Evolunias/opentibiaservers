import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-ot');
}

export default function WithScreenshotsRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-ot" />;
}
