import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-register');
}

export default function WithScreenshotsEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-register" />;
}
