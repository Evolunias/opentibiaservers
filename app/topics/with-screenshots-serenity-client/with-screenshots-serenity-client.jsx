import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-client');
}

export default function WithScreenshotsSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-client" />;
}
