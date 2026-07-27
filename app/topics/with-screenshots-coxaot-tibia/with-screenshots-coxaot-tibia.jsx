import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-tibia');
}

export default function WithScreenshotsCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-tibia" />;
}
