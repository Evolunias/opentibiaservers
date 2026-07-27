import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-rules');
}

export default function WithScreenshotsXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-rules" />;
}
