import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-open-tibia');
}

export default function WithScreenshotsTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-open-tibia" />;
}
