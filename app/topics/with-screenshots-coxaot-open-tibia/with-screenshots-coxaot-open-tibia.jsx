import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-open-tibia');
}

export default function WithScreenshotsCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-open-tibia" />;
}
