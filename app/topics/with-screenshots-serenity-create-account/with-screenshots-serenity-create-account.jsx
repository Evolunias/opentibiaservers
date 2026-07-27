import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-create-account');
}

export default function WithScreenshotsSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-create-account" />;
}
