import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-rules');
}

export default function WithScreenshotsThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-rules" />;
}
