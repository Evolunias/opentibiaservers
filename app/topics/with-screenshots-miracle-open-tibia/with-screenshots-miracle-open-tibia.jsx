import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-open-tibia');
}

export default function WithScreenshotsMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-open-tibia" />;
}
