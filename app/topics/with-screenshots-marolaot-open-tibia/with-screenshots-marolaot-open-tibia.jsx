import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-open-tibia');
}

export default function WithScreenshotsMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-open-tibia" />;
}
