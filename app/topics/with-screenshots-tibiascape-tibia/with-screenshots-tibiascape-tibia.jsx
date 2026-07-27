import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-tibia');
}

export default function WithScreenshotsTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-tibia" />;
}
