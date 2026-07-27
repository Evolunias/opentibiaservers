import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-tibia');
}

export default function WithScreenshotsRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-tibia" />;
}
