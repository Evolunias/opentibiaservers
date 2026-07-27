import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-rules');
}

export default function WithScreenshotsMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-rules" />;
}
