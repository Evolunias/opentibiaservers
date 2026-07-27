import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-ot');
}

export default function WithScreenshotsTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-ot" />;
}
