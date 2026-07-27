import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-tibia');
}

export default function WithScreenshotsMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-tibia" />;
}
