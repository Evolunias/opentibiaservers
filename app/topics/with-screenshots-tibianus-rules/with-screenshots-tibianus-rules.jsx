import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-rules');
}

export default function WithScreenshotsTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-rules" />;
}
