import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-rules');
}

export default function WithScreenshotsDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-rules" />;
}
