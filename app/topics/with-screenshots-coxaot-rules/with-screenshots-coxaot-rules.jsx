import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-rules');
}

export default function WithScreenshotsCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-rules" />;
}
