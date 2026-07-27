import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-open-tibia');
}

export default function WithScreenshotsRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-open-tibia" />;
}
