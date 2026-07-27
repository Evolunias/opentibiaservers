import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-rules');
}

export default function WithScreenshotsCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-rules" />;
}
