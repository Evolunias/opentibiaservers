import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-rules');
}

export default function WithScreenshotsSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-rules" />;
}
